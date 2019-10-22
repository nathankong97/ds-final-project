<?php
//Step 0:Validate incoming datase (Arlie entered)
use Ramsey\Uuid\Uuid;

$guid = Uuid::uuid4()->toString();

echo $guid;
